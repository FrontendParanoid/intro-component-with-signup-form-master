import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubmitHoverDirective } from './submit-hover.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SubmitHoverDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  DisplayError(element: HTMLInputElement)
  {
    element.classList.add('error-display');
    element.classList.add('placeholder-error');
    element.placeholder = "";
    let errorSpan = element.nextElementSibling as HTMLSpanElement;
    if (errorSpan.textContent === "")
    {
      errorSpan.textContent = "This field is required";
    }
  }

  DisplayEmailError(element: HTMLInputElement)
  {
    element.classList.add('error-display');
    element.classList.add('placeholder-error');
    element.placeholder = "email@example.com";

    let errorSpan = element?.nextElementSibling as HTMLSpanElement;
    errorSpan.textContent = "please enter a valid email address";
  }

  CheckFormat(email: string | null | undefined) : boolean
  {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  }

  ValidateForm(form: HTMLFormElement)
  {
    let firstName : HTMLInputElement = form.querySelector("#fname") as HTMLInputElement;
    let lastName : HTMLInputElement = form.querySelector("#lname") as HTMLInputElement;
    let email : HTMLInputElement = form.querySelector("#email") as HTMLInputElement;
    let pass  : HTMLInputElement= form.querySelector("#pass") as HTMLInputElement;
    let error:boolean = false;

    let errorSpans = form.querySelectorAll(".error") as NodeListOf<HTMLElement>;
    errorSpans.forEach(span => span.textContent = "");


    if (firstName?.value?.trim()==="")
    {
      console.log(firstName);
      this.DisplayError(firstName);
      error = true;
    }
    else
    {
      firstName.classList.remove("red-border");
    }
    if (lastName?.value?.trim()==="")
    {
      this.DisplayError(lastName);
      error = true;
    }
    else
    {
      lastName.classList.remove("red-border");
    }
    if (email?.value?.trim()==="")
    {
      this.DisplayError(email);
      error = true;
    }

    if (pass?.value?.trim()==="")
    {
      this.DisplayError(pass);
      error = true;

    }
    else
    {
      pass.classList.remove("red-border");
    }

    if (!this.CheckFormat(email?.value))
    {
      this.DisplayEmailError(email);
      error = true;
    }
    else
    {
      email.classList.remove("red-border");
    }
    return error == false;
  }
  SubmitForm(event : Event) : void
  {
    event.preventDefault();
    let form = event.target as HTMLFormElement;

    //Finish implementing these two

    if (this.ValidateForm(form))
    {
      alert("form submitted!")
      form.submit();
    }
    else
    {
      console.log("form raised error/s")
    }
  }
}
