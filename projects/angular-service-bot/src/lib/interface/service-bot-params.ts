export interface ServiceBotParams {
  servicebot_id: string;
  service: string;
  email?: string;
  customer_id?: string;
  debug?: boolean;
  coupon?: boolean;
  handleResponse?: (...args: any[]) => void;
  options?: any;
}
