import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Test {
    // 自增列
    @PrimaryGeneratedColumn()
    id: number;

    // 普通列
    @Column({type: 'varchar', length: 255})
    name: string;

    @Column({select: true, comment: '注释', default: '123', nullable: true})// 查询时不会返回给用户
    password: string;

    @Column('simple-array')
    names: string[]

    @Column('simple-json')
    json: {
        name: string,
        age: number 
    }

    @Generated('uuid')
    uuid: string;

    @CreateDateColumn({type: 'timestamp'})
    createTime: Date;

    @Column({
        type: 'enum',
        enum: [1,2,3],
        default: 1
    })
    robert: number
}
