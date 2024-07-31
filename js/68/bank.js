(function () {
    'use strict';

    function accountCreator() {
        return {
            balance: 0,
            performTransaction: function (type,amount) {
                if (type == 'deposit') {
                    this.balance += amount;
                }
                else if (type == 'withdraw'){
                    this.balance -= amount;
                }

                console.log(`youre balance is: ${this.balance}`);
            }
        };
    }
    function Transaction(type, amount) {
        if (type == 'deposit') {
            this.balance += amount;
        }
        else if (type == 'withdraw') {
            this.balance -= amount;
        }

        console.log(`youre balance is: ${this.balance}`);
    }


    const checking = accountCreator();
    Transaction.call(checking, 'deposit', 50);
    const checking2 = accountCreator();
    Transaction.apply(checking2, ['deposit', 500]);

    const checkingDeposit50 = Transaction.bind(checking, 'deposit', 50);
    checkingDeposit50();

}());