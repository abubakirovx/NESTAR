import { Controller, Get, Logger } from '@nestjs/common';
import { BatchService } from './batch.service';
import { Interval, Timeout, Cron } from '@nestjs/schedule';
import { BATCH_ROLLBACK, BATCH_TOP_AGENTS, BATCH_TOP_PROPERIES } from './lib/config';

@Controller()
export class BatchController {
	private logger: Logger = new Logger('BatchController');

	constructor(private readonly batchService: BatchService) {}

	@Timeout(1000)
	handleTimeout() {
		this.logger.verbose('BATCH SERVER READY');
	}
	@Cron('00 00 01 * * *', { name: BATCH_ROLLBACK })
	public async batchRollback() {
		try {
			this.logger['context'] = BATCH_ROLLBACK;
			this.logger.debug('EXCUTED');
			await this.batchService.batchRollback();
		} catch (err) {
			this.logger.error(err);
		}
	}
	@Cron('20 00 01 * * *', { name: BATCH_TOP_PROPERIES })
	public async batchTopProperties() {
		try {
			this.logger['context'] = BATCH_TOP_PROPERIES;
			this.logger.debug('EXCUTED');
			await this.batchService.batchTopProperties();
		} catch (err) {
			this.logger.error(err);
		}
	}
	@Cron('40 00 01 * * *', { name: BATCH_TOP_AGENTS })
	public async batchTopAgents() {
		try {
			this.logger['context'] = BATCH_TOP_AGENTS;
			this.logger.debug('EXCUTED');
			await this.batchService.batchTopAgents();
		} catch (err) {
			this.logger.error(err);
		}
	}

	// @Interval(1000)
	// handleInterval() {
	// 	this.logger.debug("INTERVAL")
	// }

	@Get()
	getHello(): string {
		return this.batchService.getHello();
	}
}
