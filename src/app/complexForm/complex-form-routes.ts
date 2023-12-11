import {Routes} from "@angular/router";
import {ComplexFormComponent} from "./components/complex-form/complex-form.component";
import {ComplexFormServiceService} from "./services/complex-form-service.service";

export default [
  {
    path: '',
    providers: [
      ComplexFormServiceService
    ],
    component: ComplexFormComponent
  }
] satisfies Routes;
