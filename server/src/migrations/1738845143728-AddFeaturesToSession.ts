import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFeaturesToSession1738845143728 implements MigrationInterface {
    name = 'AddFeaturesToSession1738845143728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" ADD "features" text array NOT NULL DEFAULT '{}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" DROP COLUMN "features"`);
    }

}
