import PostModul from "@/resources/post/post.modul";
import Post from '@/resources/post/post.interface';

class PostService {
    private post = PostModul;

    /**
     * Create a new post
     */

    public async create(title: string, body: string): Promise<Post> {
        try {
            const post = await this.post.create({ title, body });

            return post;
        } catch (err: any) {
            throw new Error('Unable to create post');
        }
    }
}

export default PostService;