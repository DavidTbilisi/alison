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

    public function __construct($name, $mail )
    {
        $this->name = $name;
        $this->mail = $mail ;
    }

    public function build()
    {
        return $this->view('emails.passwordReset')
                    ->subject('password reset');
    }
}
