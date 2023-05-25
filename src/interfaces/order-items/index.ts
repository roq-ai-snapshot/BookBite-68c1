import { OrdersInterface } from 'interfaces/orders';
import { MenuItemsInterface } from 'interfaces/menu-items';

export interface OrderItemsInterface {
  id?: string;
  order_id?: string;
  menu_item_id?: string;
  quantity: number;
  customization?: string;

  orders?: OrdersInterface;
  menu_items?: MenuItemsInterface;
}
