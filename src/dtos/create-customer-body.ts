import { IsNotEmpty, Length } from 'class-validator';

export class CreateCustomerBody {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @IsNotEmpty()
  role: string;
}
