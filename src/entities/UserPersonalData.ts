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
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  adress_id: number;

  @ManyToOne(() => UserAddressData)
  @JoinColumn({ name: 'adress_id' })
  adress_data: UserAddressData;

  @Column()
  contact_id: number;

  @OneToOne(() => UserContactData)
  @JoinColumn({ name: 'contact_id' })
  contact_data: UserContactData;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserPersonalData;
