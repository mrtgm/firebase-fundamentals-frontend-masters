import { seedUsersForFirestore } from '../../seed/users';
import { seedExpensesReference, seedExpensesDernormalized } from '../../seed/expenses';

seedUsersForFirestore().then(seedExpensesDernormalized);
