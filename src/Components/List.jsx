import React, { useState } from "react";
import Check from "./Check";
import DeleteButton from "./DeleteButton";
import Input from "./Input";
import OptionButton from "./OptionButton";
import SecondaryButton from "./SecondaryButton";
import "../Pages/Styles/List.css";
import Fallback from "./Fallback";
import { getDatabase, ref, remove, update } from "firebase/database";
import Jwt from "jwt-decode";

const List = (props) => {
  const { todo, id, date, isCompleted } = props;
  const db = getDatabase();
  const [isEdit, setIsEdit] = useState(false);
  const [startEdit, setStartEdit] = useState(todo);
  const [onSave, setOnSave] = useState(todo);
  const [isCheck, setIsChecked] = useState(isCompleted);

  const checkedHandler = () => {
    if (isCheck === false) {
      setIsChecked(true);
      const decode = Jwt(storage);
      update(ref(db, `notes/${decode.ID}/${id}`), {
        isCompleted: true,
      });
    } else {
      const decode = Jwt(storage);
      update(ref(db, `notes/${decode.ID}/${id}`), {
        isCompleted: false,
      });
      setIsChecked(false);
    }
  };

  const startEditHandler = (event) => {
    setStartEdit(event.target.value);
  };

  const onSaveHandler = () => {
    const decode = Jwt(storage);
    update(ref(db, `notes/${decode.ID}/${id}`), {
      todo: startEdit,
    }).then(() => setOnSave(startEdit));
    setIsEdit(false);
  };

  const storage = localStorage.getItem("USER_TOKEN");
  const deleteHandler = () => {
    const decode = Jwt(storage);
    remove(ref(db, `notes/${decode.ID}/${props.id}`));
  };

  const cancelEdit = () => {
    setIsEdit(false);
    setStartEdit(todo);
  };

  return (
    <div className="form-list">
      <div className="list-container">
        {isEdit ? (
          <form
            className="form-input-edit"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              className="editing-list"
              placeholder={startEdit.length === 0 ? "" : "Task"}
              value={startEdit}
              onChange={startEditHandler}
            />
            {startEdit.length === 0 && (
              <Fallback className="edit-fallback">Cannot Be Empty!</Fallback>
            )}
            <SecondaryButton className="cancelEdit" onClick={cancelEdit}>
              Cancel
            </SecondaryButton>
            <SecondaryButton
              className="saveEdit"
              onClick={onSaveHandler}
              disabled={startEdit.length === 0 && "disabled"}
            >
              Save
            </SecondaryButton>
          </form>
        ) : (
          <div>
            <ul>
              <div>
                <p className={isCheck === true ? "textCheck" : ""}>{onSave}</p>
                {isCheck === true ? (
                  <div className="date-list-check">
                    <p style={{ fontSize: "14px" }}>{date}</p>
                  </div>
                ) : (
                  <div className="date-list">
                    <p style={{ fontSize: "14px" }}>{date}</p>
                  </div>
                )}
              </div>
              <Check checked={isCheck} onClick={checkedHandler} />
            </ul>
            <div>
              {isCheck === true ? (
                <DeleteButton
                  className="del-btn-check"
                  onClick={deleteHandler}
                />
              ) : (
                <>
                  <DeleteButton onClick={deleteHandler} />
                  <OptionButton onClick={() => setIsEdit(true)} />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
