import React from 'react'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


import { useSelector, useDispatch } from 'react-redux'
import { setDialog } from 'selectors/app.selector'
import { actSetDialog } from 'actions/app.action'
import { asyncUpdateFood } from 'actions/food.action'
import { getNewFoodDataUpdate } from 'selectors/food.selector'


const DialogComponent = () => {

  const dialog: any = useSelector(setDialog)
  const newData: any = useSelector(getNewFoodDataUpdate)
  const dispatch = useDispatch()


  const _handleCancel = () => {
    const isShow = false
    const content = dialog.content
    const type = ""
    dispatch(actSetDialog(isShow, type, content))
  }

  const _handleUpdate = async () => {
    dispatch(asyncUpdateFood({
      food: newData, cb: () => { console.log(1234123) },
    }))
  }

  return (
    <>
      {dialog.isShow && <Dialog
        open={true}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialog.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={_handleCancel} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={_handleUpdate} variant="contained" color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog >}
    </>
  )
}
export default DialogComponent