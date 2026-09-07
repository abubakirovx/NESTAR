import { Injectable } from '@nestjs/common';
import { MemberService } from '../member/member.service';
import { PropertyService } from '../property/property.service';
import { BoardArticleService } from '../board-article/board-article.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Like } from '../../libs/dto/like/like';

@Injectable()
export class LikeService {
    constructor(
            @InjectModel('Like') private readonly likeModel: Model<Like>,
            private memberService: MemberService,
            private propertyService: PropertyService,
            private boardArticleService: BoardArticleService,
        ) {}
        
}
