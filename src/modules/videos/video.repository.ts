import api from "../../lib/api";
import { Video } from "./video.entity";

type CreateParams = {
	video: File;
	thumbnail: File;
	title: string;
	description: string;
	isPublic: boolean;
};

type Pagination = {
	page: number;
	limit: number;
	totalPages: number;
};

export const videoRepository = {
	async create(params: CreateParams): Promise<Video> {
		const result = await api.postForm("/videos", params); // fileを含むデータをpostする時はpostFormを使う
		return new Video(result.data);
	},

	async find(
		keyword: string | null,
		paginationParams: { page: number; limit: number } = { page: 1, limit: 9 }
	): Promise<{ videos: Video[]; pagination: Pagination }> {
		const result = await api.get("/videos", {
			params: { ...paginationParams, keyword },
		});
		return {
			videos: result.data.videos.map((video: Video) => new Video(video)),
			pagination: result.data.pagination,
		};
	},

	async findMine(): Promise<Video[]> {
		const result = await api.get("/videos/mine");
		return result.data.map((video: Video) => new Video(video));
	},
};
