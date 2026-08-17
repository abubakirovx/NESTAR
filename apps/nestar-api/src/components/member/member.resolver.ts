import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { log } from 'util';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { InternalServerErrorException, UsePipes, ValidationPipe } from '@nestjs/common';
import { Member } from '../../libs/dto/member/member';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	@Query(() => String)
	public async getMember(): Promise<String> {
		console.log('Query: getMember');
		return this.memberService.getMember();
	}
	@Mutation(() => Member)
	@UsePipes(ValidationPipe)
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		try {
			console.log('Mutation: signup');
			console.log('MemberInput=>', input);

			return this.memberService.signup(input);
		} catch (err) {
			console.log('Error', err);
			throw new InternalServerErrorException(err);
		}
	}
	@Mutation(() => String)
	@UsePipes(ValidationPipe)
	public async login(@Args('input') input: LoginInput): Promise<string> {
		console.log('Mutation: login');
		return this.memberService.login();
	}
	@Mutation(() => String)
	public async updateMember(): Promise<string> {
		console.log('Mutation: updateMember');
		return this.memberService.updateMember();
	}
}
