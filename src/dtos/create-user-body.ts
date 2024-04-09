import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty({
    message: 'The member name not be empty',
  })
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: 'The member name not be empty',
  })
  function: string;
}
