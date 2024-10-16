import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';

//! == no se puede ser null
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

//Se exporta para poder ser utilizado
export default Todo;
