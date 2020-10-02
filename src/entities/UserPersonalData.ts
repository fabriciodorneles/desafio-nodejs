import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import UserAddressData from './UserAddressData';
import UserContactData from './UserContactData';

@Entity('users_personal_data')
class UserPersonalData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  address_id: string;

  @ManyToOne(() => UserAddressData)
  @JoinColumn({ name: 'address_id' })
  address_data: UserAddressData;

  @Column()
  contact_id: string;

  @OneToOne(() => UserContactData)
  @JoinColumn({ name: 'contact_id' })
  contact_data: UserContactData;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserPersonalData;
