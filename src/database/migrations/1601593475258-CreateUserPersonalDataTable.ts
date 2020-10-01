import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUserPersonalDataTable1601593475258 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_personal_data',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
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
            name: 'adress',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'contact',
            type: 'int',
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
            name: 'personal_data_adress',
            referencedTableName: 'users_adress_data',
            referencedColumnNames: ['id'],
            columnNames: ['adress'],
            onDelete: 'SET NULL',
          },
          {
            name: 'personal_data_contact',
            referencedTableName: 'users_contact_data',
            referencedColumnNames: ['id'],
            columnNames: ['contact'],
            onDelete: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
