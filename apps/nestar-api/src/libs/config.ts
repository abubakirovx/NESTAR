import { ObjectId } from 'bson';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

export const availableAgentSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews', 'memberRank'];
export const availableMemberSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews'];
export const availableOptions = ['propertyBarter', 'propertyRent'];
export const availablePropertySorts = [
	'createdAt',
	'updatedAt',
	'propertyLikes',
	'propertyViews',
	'propertyRank',
	'propertyPrice',
];

// IMAGE CONFIGURATION

export const validMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
export const validExtensions = ['.png', '.jpg', '.jpeg'];

export const isValidImage = (filename: string, mimetype: string): boolean => {
	const ext = path.extname(filename).toLowerCase();

	// Extension har doim tekshiriladi
	if (!validExtensions.includes(ext)) {
		return false;
	}

	// Postman MIME'ni aniqlay olmagan holat
	if (mimetype === 'application/octet-stream') {
		return true;
	}

	// Normal holat
	return validMimeTypes.includes(mimetype);
};
export const getSerialForImage = (filename: string) => {
	const ext = path.parse(filename).ext;
	return uuidv4() + ext;
};

export const lookupMember = {
	$lookup: {
		from: 'members',
		localField: 'memberId',
		foreignField: '_id',
		as: 'memberData',
	},
};
export const shapeIntoMongoObjectId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};
