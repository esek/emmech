import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEsekShare1729088299829 implements MigrationInterface {
    name = 'AddEsekShare1729088299829'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "albums" ADD "esekShared" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "albums" DROP COLUMN "esekShared"`);
    }

}
