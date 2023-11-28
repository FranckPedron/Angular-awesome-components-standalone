import {Routes} from "@angular/router";
import {PostsService} from "./services/posts.service";
import {PostsResolver} from "./resolvers/posts.resolver";
import {PostListComponent} from "./components/post-list/post-list.component";

export default [
  {
    path: '',
    providers: [
      PostsService
    ],
    component: PostListComponent,
    resolve: {posts: PostsResolver}
  }
] satisfies Routes;
