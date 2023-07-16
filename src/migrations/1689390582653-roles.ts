import Roles, { RoleCode } from 'src/roles/entities/roles.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Roles1689390582653 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder(Roles, 'roles')
      .insert()
      .values([
        {
          code: RoleCode.ADMIN,
          name: 'Admin',
          description: 'Admin',
        },
        {
          code: RoleCode.USER,
          name: 'User',
          description: 'User',
        },
        {
          code: RoleCode.EMPLOYEE,
          name: 'Employee',
          description: 'Employee',
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const exist = await queryRunner.manager.exists(Roles);
    if (exist) {
      queryRunner.dropTable('roles');
    }
  }
}
