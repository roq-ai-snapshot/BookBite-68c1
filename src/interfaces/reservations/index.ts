import { UsersInterface } from 'interfaces/users';
import { RestaurantsInterface } from 'interfaces/restaurants';

export interface ReservationsInterface {
  id?: string;
  customer_id?: string;
  restaurant_id?: string;
  date: Date;
  time: Date;
  number_of_guests: number;
  table_status: string;

  users?: UsersInterface;
  restaurants?: RestaurantsInterface;
}
