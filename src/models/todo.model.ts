import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';

@Table
class Todo extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    title!: string;

    @Column(DataType.STRING)
    description!: string;

    @Column(DataType.BOOLEAN)
    completed!: boolean;
}

export default Todo;
