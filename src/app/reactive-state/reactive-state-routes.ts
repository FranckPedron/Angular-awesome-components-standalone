import {CandidateListComponent} from "./components/candidate-list/candidate-list.component";
import {SingleCandidateComponent} from "./components/single-candidate/single-candidate.component";
import {Routes} from "@angular/router";
import {CandidatesService} from "./services/candidates.service";

export default [
  {
    path: 'candidates',
    providers: [CandidatesService],
    component: CandidateListComponent
  },
  {
    path: 'candidates/:id',
    component: SingleCandidateComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'candidates'
  }
] satisfies Routes;
