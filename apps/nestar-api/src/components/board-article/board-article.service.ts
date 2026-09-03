import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BoardArticle } from '../../libs/dto/board-article/board-article';
import { AuthService } from '../auth/auth.service';
import { ViewService } from '../view/view.service';
import { MemberService } from '../member/member.service';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BoardArticleService {
        constructor(
            @InjectModel('Property') private readonly boardArticleModel: Model<BoardArticle>,
            private authService: AuthService,
            private viewService: ViewService,
            private memberService: MemberService,
        ) {}
}
