import { Card } from '@mui/material';
import { OrderDto } from '@/models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays, format } from 'date-fns';

function RecentOrders() {
  const orders: OrderDto[] = [
    {
      id: 2,
      customerName: "Dat Tran",
      createDate: subDays(new Date(), 1).getTime(),
      customerId: 2,
      shippingAddress: "District 1, HCM City",
      paymentMethod: "Thanh toán khi nhận hàng",
      totalPrice: 1000000,
      orderStatus: "CANCEL",
    },
    {
      id: 1,
      customerName: "Dat Tran",
      createDate: subDays(new Date(), 5).getTime(),
      customerId: 2,
      shippingAddress: "District 9, HCM City",
      paymentMethod: "Thanh toán khi nhận hàng",
      totalPrice: 500000,
      orderStatus: "DONE",
    }
  ];

  return (
    <Card>
      <RecentOrdersTable orders={orders} />
    </Card>
  );
}

export default RecentOrders;
