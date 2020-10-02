import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsersAdressDataTable1601595066019 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_address_data',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'street',
            type: 'varchar',
          },
          {
            name: 'suite',
            type: 'varchar',
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'zipcode',
            type: 'varchar',
          },
          {
            name: 'lat',
            type: 'varchar',
          },
          {
            name: 'lng',
            type: 'varchar',
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users_address_data');
  }
}
