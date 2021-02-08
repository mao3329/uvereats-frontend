import React from 'react';

// components
import { DialogContent, Dialog, DialogTitle } from '@material-ui/core';
import { OrderButton } from './Buttons/OrderButton';

export const NewOrderConfirmDialog = ({
  isOpen,
  onClose,
  existingRestaurantName,
  newRestaurantName,
  onClickSubmit,
}) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    maxWidth="xs"
  >
    <DialogTitle>
      新規注文を開始しますか？
    </DialogTitle>
    <DialogContent>
      <p>
        {
          `ご注文に${existingRestaurantName}の商品が含まれています。
          新規のご注文を開始して${newRestaurantName}の商品を追加してください。`
        }
      </p>
      {/*さっき作ったOrderButtonを使用*/}
      <OrderButton onClick={onClickSubmit}>
        新規注文
      </OrderButton>
    </DialogContent>
  </Dialog>
);