import {MigrationInterface, QueryRunner} from "typeorm";

export class pharmacyTable1642030421384 implements MigrationInterface {
    name = 'pharmacyTable1642030421384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pharmacy\` CHANGE \`cnpj_matriz\` \`cnpj_matriz\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pharmacy\` CHANGE \`cnpj_matriz\` \`cnpj_matriz\` varchar(255) NOT NULL`);
    }

}
