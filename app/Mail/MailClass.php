<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MailClass extends Mailable
{
    use Queueable, SerializesModels;
    public $mail;
    public $name;
    public $pass;

    public function __construct($name, $mail, $pass )
    {
        $this->name = $name ;
        $this->mail = $mail ;
        $this->pass = $pass ;
    }

    public function build()
    {
        return $this->view('emails.passwordReset')
                    ->subject('password reset');
    }
}
