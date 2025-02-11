import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPublishedFlagAlbum1739008254250 implements MigrationInterface {
    name = 'AddPublishedFlagAlbum1739008254250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "albums" ADD "published" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "albums" DROP COLUMN "published"`);
    }

}
