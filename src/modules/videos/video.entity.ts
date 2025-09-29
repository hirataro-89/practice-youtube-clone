import { User } from "../users/user.entity";

export class Video {
	id!: string;
	title!: string;
	url!: string;
	thumbnailUrl!: string;
	description?: string;
	isPublic!: boolean;
	user!: User;
	createdAt!: Date;

	constructor(data: Video) {
		Object.assign(this, data);
		this.createdAt = new Date(data.createdAt); // 日付をDateオブジェクトに変換。文字列で返ってくるので
		if (data.user != null) { // ここも文字列で渡ってくるので、Userのentityの型に変換
			this.user = new User(data.user);
		}
	}
}
