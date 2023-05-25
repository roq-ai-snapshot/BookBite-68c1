import * as yup from 'yup';
import { feedbacksValidationSchema } from 'validationSchema/feedbacks';
import { menuItemsValidationSchema } from 'validationSchema/menu-items';
import { ordersValidationSchema } from 'validationSchema/orders';
import { reservationsValidationSchema } from 'validationSchema/reservations';

export const restaurantsValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  contact_details: yup.string().required(),
  operating_hours: yup.string().required(),
  owner_id: yup.string().nullable(),
  feedbacks: yup.array().of(feedbacksValidationSchema),
  menu_items: yup.array().of(menuItemsValidationSchema),
  orders: yup.array().of(ordersValidationSchema),
  reservations: yup.array().of(reservationsValidationSchema),
});
