<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Categories;
use App\Courses;
use App\Mail\MailClass;
use App\OneCourse;
use App\Resource;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;


class HomeController extends Controller
{
    protected $all;

    public function __construct(Request $request)
    {
        $this->all = [
            'allCategories' => Categories::allCategories(),
            'subCategories' => Categories::subCategories(1),
            'allCats' => Categories::activeCategories(),
         ];
        $this->middleware(function ($request, $next) {
            $this->all['user'] =  User::where("id",session('user_id'))->get();
            return $next($request);
        });
    }
    public function index()
    {
        return view('home-child', ['all'=>$this->all]);
    }
    public function allcourses()
    {
        return view('courses-child', ['all'=>$this->all]  );
    }
    public function learningPath ()
    {
        return view('learning-path-child',['all'=>$this->all]);
    }
    public function learningPathName ($name)
    {
        return view('learning-path-inner-child',[
            'all'=>$this->all,
            'name' => $name
        ]);
    }

    public function login (Request $request)
    {
        $users = User::all('id','email','password', 'name');
        $email = $request->input('email');
        $pass = $request->input('password');
        if($request->isMethod("post")){
            $rules =[
                'email' => 'required|email|exists:users,email',
                'password' => 'required',
            ];
            $messages = [
                'email.exists' => 'ელ.ფოსტა არ არსებობს ბაზაში',
                'email.required' => 'ელ.ფოსტა აუცილებელია შესავსებად',
                'password' => 'პაროლი არასწორია',
            ];
            $validator =  $this->validate($request, $rules, $messages);

            for ($counter = 0; $counter < count($users); $counter++) {
                $isMail = $email == $users[$counter]->email;
                $isPass = Hash::check($pass, $users[$counter]->password);
                $isUser = ( $isMail && $isPass );
                // dump( $users[$counter]->email);
                if ( $isUser ){
                    session(['loggedin' => $users[$counter]->name]);
                    session(['user_id' => $users[$counter]->id]);
                    return redirect(route('dashboard'));
                }
            }
        }

        return view('login-child', ['all'=>$this->all]);
    }
    public function logout(Request $request){
// dump($request->session()->all());
        if($request->session()->has('loggedin')) {
            $request->session()->flush();
        }
        return redirect(route('home'));
    }
    public function register (Request $request)
    {
        if($request->isMethod("post")){
            $rules =[
                'firstname' => 'required|max:15',
                'lastname' => 'required|max:25',
                'signup_email' => 'required|email|unique:users,email',
                'signup_password' => 'required',
                'signup_password_confirmation' => 'required|same:signup_password',
            ];
            $messages = [
                'required'=>'ველი :attribute აუცილებელია შესავსებად',
                'max'=>':attribute ველის სიგრძე არ უნდა აღემატებოდეს :max სიმბოლოს',
                'same'=>'ველი :attribute და ველი :other უნდა ემთხვეოდეს',
                'signup_email.unique' => 'ასეთი ელ.ფოსტა უკვე დარეგისტრირებულია'
            ];
            $this->validate($request, $rules, $messages);
            // dd($request->all());
            $users = new User;
            $users->name = $request->input('firstname');
            $users->lastname = $request->input('lastname');
            $users->email = $request->input('signup_email');
            $users->password = bcrypt($request->input('signup_password'));
            $users->remember_token = $request->input('_token');
            $users->save();
           return redirect(route("login"))->with('success','თქვენ წარმატებით გაიარეთ რეგისტრაცია');
    }

        return view('register-child', ['all'=>$this->all]);
    }

    public function search (Request $request)
    {
        $order = "id";
        if ($request->has('order')) {
            $order = explode("-",$request->input('order'));
        };

        switch ($order[0]){
            case 'certified':  $order = "id";
                break;
            case 'popular': $order = "rating";
                break;
            case 'trending': $order = "trending";
                break;
            case 'released': $order = "created_at";
                break;
        }

       $uri = request()->getRequestUri();
        // dump($uri );
        preg_match_all("/category\=([^&]+)/",$uri, $caterory );
        preg_match_all("/type\=([^&]+)/",$uri, $type );
        preg_match_all("/environment\=([^&]+)/",$uri, $environment );
        preg_match_all("/level\=([^&]+)/",$uri, $level );
        preg_match_all("/duration\=([^&]+)/",$uri, $duration );
        preg_match_all("/feature\=([^&]+)/",$uri, $feature );

        if(isset($type[1][0]))
            $type = $type[1][0] == 'certificate' ? 1 : 0;
        else
            $type = null;
        $matches = [
            "caterory" => $caterory,
            "type" => $type,
            "environment" => $environment,
            "level" => $level,
            "duration" => $duration,
            "feature" => $feature
        ];
    // dd($matches["caterory"][1][0]);
    // dd($matches["type"][1][0]);
        $result = Courses::coursesDesc(
            $order,
            $matches["caterory"][1],
            $matches["type"]
        );

        $all = [
            'status' => 200,
//             'total' =>  count($result),
            'result' => $result
        ];
        return response(  $all  )
            ->header('Content-Type', 'application/json');
    }
    public function aboutCourse($name = null)
    {
        $course = Courses::activeCoursesBySlug($name);
        if ($name !== null && $course !==null) {
        return view("courses-about-child",[
            'all'=>$this->all,
            'course' => $course
        ]);
        } else {
            return redirect(route("courses"));
        }
    }

    public function dashboard()
    {
        $user_id = session('user_id');
        $scourses = Courses::where('author_id',$user_id)->get();

        $oneC = [];
        foreach($scourses as $index=>$oneCourse) {
            $bool = OneCourse::isLessonsInCourse($user_id,$oneCourse->id);
            if ($bool) {
                $oneC[] = OneCourse::isLessonsInCourse($user_id,$oneCourse->id,false);
            } else{
                $oneC [] = [];
            }
        }

        $user = User::where("id",$user_id)->get();
        return view('admin-user',
            [
                'all'       => $this->all,
                'scourses'  => $scourses ,
                'user'      => $user,
                'oneC'      => $oneC,
            ]);
    }

    public function uploadShortCourse ($request) {
        $rules = [
            'courseCover' => 'mimes:jpeg,png,jpg,gif',
            'courseTitle' => 'required',
            'courseDesc' => 'required',
            'choose_category' => 'required',
            'choose_type' => 'required',
        ];
        $messages = [
            'courseCover.required' => 'სურათის ატვირთვა აუცილებელია',
            'courseCover.mimes' => 'სწორი სურათის გაფართოებაა jpeg,png,jpg,gif',
            'courseTitle.required' => 'სათაურის დაწერა აუცილებელია',
            'courseDesc.required' => 'აღწერის დაწერა აუცილებელია'
        ];
        $this->validate($request,$rules,$messages);
        if($request->hasFile('courseCover')){
            $img = $request->file('courseCover');
            $name = $img->getClientOriginalName();
            $destinationPath = public_path('/images');
            $img->move($destinationPath, $name);
        }

        $title = $request->input('courseTitle');
        $choose_type = $request->input('choose_type');
        $choose_category = $request->input('choose_category');
        $desc = $request->input('courseDesc');
        $fortime = $request->input('fortime');
        $payfor = $request->input('payfor');
        $choose_category = implode(',',$choose_category) ;

        if($request -> id){
            // edit
            $course = Courses::find($request->id);
            if (isset($name)){
                $course->courseImgUrl = $name;
            }
            $course->name = $title;
            $course->slug = str_slug($title);
            $course->description = $desc;
            $course->price = $payfor;
            $course->avg_duration = $fortime;
            $course->course_type_id = $choose_type;
            $course->category_name = $choose_category;
            $course->category_slug = str_slug($choose_category);
            $course->category_slug = str_slug($choose_category);
            $course->root_category_name = 0;
            $course->root_category_slug = 0;
            $course->parent_category_name = 0;
            $course->parent_category_slug = 0;
            $course->save();
        } else {
            // create

            $course = new Courses();
            $course->courseImgUrl = $name;
            $course->name = $title;
            $course->author_id = session('user_id');
            $course->slug = str_slug($title);
            $course->description = $desc;
            $course->avg_duration = $fortime;
            $course->price = $payfor;
            $course->course_type_id = $choose_type;
            $course->category_name = $choose_category;
            $course->category_slug = str_slug($choose_category);
            $course->category_slug = str_slug($choose_category);
            $course->root_category_name = 0;
            $course->root_category_slug = 0;
            $course->parent_category_name = 0;
            $course->parent_category_slug = 0;
//            dump($course);
            $course->save();
        }

    }
    public function uploadResource(Request $request)
    {
        $res = $request->file('file');
        $name = $res->getClientOriginalName();
        $dest = public_path('/images');
        $res->move($dest,$name);
    }

    //    course
    //********************************************************
    public function course()
    {
        $scourses = Courses::all();
        return view('admin.user.courses.short.admin-course', ['all'=>$this->all, 'scourses'=>$scourses]);
    }
    public function addCourse(Request $request)
    {
        $allCats = Categories::activeCategories();
        if ($request->isMethod('post')) {
            $this->uploadShortCourse($request);
            return back()->with('success','კურსის აღწერა დამატებულია');
        }

        return view('admin.user.courses.short.admin-course-add',
            [
                'all'=>$this->all,
                'allCats' => $allCats,
            ]
        );
    }
    public function editCourse(Request $request)
    {
        if ($request->isMethod('post')) {
            $this->uploadShortCourse($request);
        }
        $scourse = Courses::where("id",$request->id)->get();
        return view('admin.user.courses.short.admin-course-edit',
            [
                'all'=>$this->all,
                'scourse' => $scourse
            ]
        );
    }
    public function deleteCourse(Request $request)
    {
        Courses::where("id",$request->id)->delete();
        return redirect(route('dashboard'))->with('deleted','კურსი წარმატებით წაიშალა');
    }
    //********************************************************

    //    lessons
    //********************************************************
    public function lesson($course_id,$active = 0)
    {
        session(['course_id'=>$course_id]);
        session(['lesson_id'=>$active]);
        $user_id = session('user_id');
        $course_id = session('course_id');
        echo "<script>";
        echo "var course_id = ".json_encode($course_id);
        echo "</script>";



        // dump('course_id: '.$course_id,'active lesson: '. $active);
        $resources = Resource::byUserId($user_id,$course_id,false);
        if(Resource::byUserId($user_id,$course_id,false)) {
            $resources = Resource::byUserId($user_id,$course_id); // ფაილები
        }
        $hasCurses = false;
        if(OneCourse::isLessonsInCourse($user_id,$course_id) ){     $hasCurses = true;   }
        $oneC = OneCourse::isLessonsInCourse($user_id,$course_id,false); // ტექსტიები
        return view('admin.user.courses.long.showcourse',
            [
                'all'=>$this->all,
                'resources'=>$resources,
                'oneC' => $oneC,
                'active' => $active,
                'hasCurses' => $hasCurses,
                'course_id' => $course_id,
            ]
        );
    }
    public function addLesson(Request $request)
    {
        $user_id = session('user_id');
        $course_id = session('course_id');

        $lesson = new OneCourse();
        $lesson->title = $request->input('title');
        $lesson->user_id = $user_id;
        $lesson->course_id = $course_id;
        $lesson->position = 1;
        $lesson->text = '';
        $lesson->save();
        return redirect(route('lesson',['course_id' => $course_id]));
    }
    public function editLesson(Request $request)
    {
        if(isset($request->id)){} else $request->id = 0;
        $user_id = session('user_id');
        $course_id = session('course_id');
        if($request->isMethod('post')){
            $lesson = OneCourse::byUserId($user_id,$course_id);
            $lesson[$request->id]->title = $request->input('title');
            $lesson[$request->id]->text = $request->input('text')?$request->input('text'):'';
            $lesson[$request->id]->save();
            return redirect(route('lesson',['course_id' => $course_id, 'id' => $request->id]));
        }
    }
    public function deleteLesson(Request $request)
    {
        $user_id = session('user_id');
        $course_id = session('course_id');
        if(isset($request->id)){} else $request->id = 1;
        if($request->isMethod('post')){
            $lesson = OneCourse::byUserId($user_id,$course_id);
            $lesson[$request->id]->delete();
        }
    }
    //********************************************************

    //    Resources
    //********************************************************
    public function addResource(Request $request)
    {

        $user_id = session('user_id');
        $course_id = session('course_id');
        $lesson = session('lesson_id');

        $name = $request->input('name');
        $desc = $request->input("desc");
        $res = $request->file('file');

        $upload_time = str_slug(Carbon::now('Asia/Tbilisi'));

        $size = $res->getSize();
        $type = $res->getMimeType();

        $originalName = $res->getClientOriginalName();
        $originalExt = $res->getClientOriginalExtension();
        $originalNameOnly = pathinfo( $originalName, PATHINFO_FILENAME );

        $imageName = $upload_time."_".$originalNameOnly .'.'. $originalExt;

        $resource_link = 'uploads/user'.$user_id.'\\';
        $dest = public_path( $resource_link) ;

        if ( !file_exists( $dest ) ) {
            mkdir($dest);
        }

        $res_link = $resource_link.$imageName;

// not loading on server
        $res->move($dest, $res_link);
// not loading on server

        $resource = new Resource();
        $resource->user_id   = $user_id  ;
        $resource->course_id = $course_id ;
        $resource->name = $name;
        $resource->type = $type;
        $resource->desc = $desc;
        $resource->res_link = asset($res_link);
//        dd($resource);
        $resource->save();
        return redirect(route('lesson',$course_id, $lesson));
    }
    public function editResource(Request $request)
    {
        $arr["name"] = $request->input('name');
        $arr["desc"] = $request->input('desc');

        $user_id = session('user_id');
        $course_id = session('course_id');
        $lesson_id = $request->id;

        $res = Resource::getOne($user_id,$course_id,$lesson_id);
        $res[0]->name = $arr["name"];
        $res[0]->desc = $arr["desc"];
        $res[0]->save();

        return $arr;
    }
    public function deleteResource(Request $request)
    {
        $user_id = session('user_id');
        $course_id = session('course_id');
        $lesson_id = $request->id;

        $arr = [$user_id,$course_id,$lesson_id];
        $res = Resource::getOne($user_id,$course_id,$lesson_id);
        $res[0]->delete();
        return $arr;
    }
    //********************************************************


    //    cart
    public function cart()
    {
        $cart = Cart::get($this->all['user'][0]->id);
        return view('cart-child', ['all'=>$this->all], ['data' => $cart]);
    }
    public function addToCart(Request $request)
    {
        $author_id = 1;
        if ($request->method('post')) {
            dd($request->input());
        }
        $customer_id = $this->all['user'][0]->id;
        $cart = new Cart();
        $cart->course_id = 1;
        $cart->user_id = $author_id;
        $cart->customer_id = $customer_id;
        $cart->days_left = random_int(15,30);
        $cart->status = 1;
        $cart->save();
        redirect(route("cart"));
    }
    public function removeFromCart($course_id)
    {
        $customer_id = $this->all['user'][0]->id;
        $cart = Cart::get($customer_id, $course_id);
        return $cart;
    }
// TODO: from here
    public function sendMail(Request $request)
    {
        if($request->method('post')) {
            $rules = ['email' => 'required|exists:users,email'];
            $messages = [
                'email.required' => 'ელ.ფოსტა აუცილებელია შესავსებად',
                'email.exists' => 'ასეთი ელ.ფოსტა არ არის რეგისტრირებული',
                ];
            $validator = $this->validate($request,$rules,$messages);

            $user = User::where('email',$request->email)->get();
            $pass = str_random(8);
            $user[0]->password = bcrypt($pass);
            $user[0]->save();
            Mail::to($request->email)
                ->send(new MailClass($user[0]->name, $user[0]->email, $pass));
            return redirect(route('home'))->withErrors($validator);
        }
    }
    public function addCategory(){
        $categories = [
            "Health"=>[
                "Mental Health",
                "Health Care",
                "Nursing",
                "Caregiving",
                "Disease and Disorders",
                "Pharmacology",
                "Nutrition",
                "Fitness",
                "Yoga"],
            "Business"=>[
                "E-Commerce",
                "Leadership and Management",
                "Entrepreneurship",
                "Project Management",
                "Sales",
                "Human Resources",
                "Communications",
                "Finance",
                "Finances and Banking",
                "Accounting",
                "Operations",
                "Risk Management",
                "Service Management",
                "Management and↵ Administration",
                "Customer Service",
                "Manufacturing",
                "Health and Safety",
                "Supply Chain Management",
                "Quality Control",
                "Business Process↵ Management",
                "Workplace Supervision",
                "Critical Operations ",
                "Tourism and Hospitality"],
            "Humanities"=>[
                "Psychology",
                "Education",
                "Media and Journalism",
                "History",
                "Economics",
                "Politics",
                "Sociology",
                "Personal Development",
                "Geography",
                "Law"],
            "IT"=>[
                "Software Tools",
                "IT Management",
                "Mobile Apps",
                "Network and Security",
                "Software Engineering",
                "Operating Systems",
                "Hardware",
                "Data Science",
                "Software Development",
                "Front End Languages",
                "Back End Languages",
                "Software Testing",
                "Databases",
                "Core IT Skills",
                "Game Development"],
            "Language"=>[
                "English",
                "Spanish",
                "German",
                "Irish",
                "French",
                "Chinese",
                "Arabic",
                "Swedish",
                "Japanese"],
            "Lifestyle"=>[
                "Music",
                "Literature",
                "Skilled Trades",
                "Motor",
                "Plumbing",
                "Electrical",
                "Carpentry",
                "Masonry",
                "Food and Beverage",
                "Art and Crafts",
                "Photography"],
            "Marketing"=>[
                "Social Media Marketing",
                "Marketing Management",
                "Digital Marketing",
                "Public Relations"],
            "Math"=>[
                "Core Maths Skills",
                "Calculus",
                "Probability and Statistics",
                "Algebra",
                "Geometry",
                "Series and Sequences",
                "Exam Prep"],
            "Science"=>[
                "Life Science",
                "Environmental Studies",
                "Physics",
                "General Science",
                "Chemistry",
                "Engineering"]
        ];
        $oneCategory = [];
        $allCategories = [];
        $counter= 0;
        foreach ($categories as $i => $category):
        $oneCategory['root_id'] = 0;
        $oneCategory['possition'] = 1;
        $oneCategory['status'] = 1;
        $oneCategory['title'] = $i;
        $oneCategory['url'] = strtolower($i);
        $oneCategory['navUrl'] = strtolower($i);
        $oneCategory['color'] = strtolower($i);
        $oneCategory['image'] = strtolower($i);
            $counter++;
//        $oneCategory['user_id'] = 1;
        $allCategories[] = $oneCategory;
            foreach ($category as $index => $one){
                $oneCategory['root_id'] = $counter;
                $oneCategory['possition'] = 1;
                $oneCategory['status'] = 1;
                $oneCategory['title'] = $one;
                $oneCategory['url'] = strtolower($one);
                $oneCategory['navUrl'] = strtolower($one);
                $oneCategory['color'] = strtolower($one);
                $oneCategory['image'] = strtolower($one);
                $allCategories[] = $oneCategory;
            }
            endforeach;
            foreach ($allCategories as $fill):
                dump( $fill);
            Categories::create($fill);
            endforeach;
    }
    public function setNewPassword(Request $request){
        if($request->isMethod('post')){
            dd($request->input()->all());
        }
    }
}
