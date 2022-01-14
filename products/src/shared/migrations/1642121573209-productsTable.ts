import { MigrationInterface, QueryRunner } from 'typeorm';

export class productsTable1642121573209 implements MigrationInterface {
  name = 'productsTable1642121573209';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`products\` DROP COLUMN \`disponibility\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` ADD \`disponibility\` tinyint NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`products\` DROP COLUMN \`disponibility\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` ADD \`disponibility\` varchar(255) NOT NULL`,
    );
  }
}
