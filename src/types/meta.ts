/**
 * ページのメタデータ型
 * マークダウン記事のfrontmatterでも使用。
 * OGPなどにも使用。
 *  */
export type MetaData = {
	title: string;
	description?: string;
	img?: string;
	date?: string;
	tags?: string[];
	author?: string;
};
