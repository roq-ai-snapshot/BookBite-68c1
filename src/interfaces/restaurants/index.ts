import { FeedbacksInterface } from 'interfaces/feedbacks';
import { MenuItemsInterface } from 'interfaces/menu-items';
import { OrdersInterface } from 'interfaces/orders';
import { ReservationsInterface } from 'interfaces/reservations';
import { UsersInterface } from 'interfaces/users';

export interface RestaurantsInterface {
  id?: string;
  owner_id?: string;
  name: string;
  location: string;
  contact_details: string;
  operating_hours: string;
  feedbacks?: FeedbacksInterface[];
  menu_items?: MenuItemsInterface[];
  orders?: OrdersInterface[];
  reservations?: ReservationsInterface[];
  users?: UsersInterface;
}
