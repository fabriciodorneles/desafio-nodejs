import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsersPersonalDataTable1601642551415 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_personal_data',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'username',
            type: 'varchar',
          },
          {
            name: 'address_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'contact_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'personal_data_address',
            referencedTableName: 'users_address_data',
            referencedColumnNames: ['id'],
            columnNames: ['address_id'],
            onDelete: 'SET NULL',
          },
          {
            name: 'personal_data_contact',
            referencedTableName: 'users_contact_data',
            referencedColumnNames: ['id'],
            columnNames: ['contact_id'],
            onDelete: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users_personal_data');
  }
}
