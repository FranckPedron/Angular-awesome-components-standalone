import {inject} from "@angular/core";
import {Post} from "../models/post.model";
import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {PostsService} from "../services/posts.service";

export const PostsResolver: ResolveFn<Post[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
  return inject(PostsService).getPosts();
}

