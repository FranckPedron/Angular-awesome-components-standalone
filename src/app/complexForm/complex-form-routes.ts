import {Routes} from "@angular/router";
import {ComplexFormComponent} from "./components/complex-form/complex-form.component";
import {ComplexFormService} from "./services/complex-form.service";

export default [
  {
    path: '',
    providers: [
      ComplexFormService
    ],
    component: ComplexFormComponent
  }
] satisfies Routes;
