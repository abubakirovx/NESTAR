import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {
	public async getMember(): Promise<string> {
		return 'getMember excuted !';
	}
	public async signup(): Promise<string> {
		return 'signup excuted !';
	}
	public async login(): Promise<string> {
		return 'login excuted !';
	}
	public async updateMember(): Promise<string> {
		return 'updateMember excuted !';
	}
}
