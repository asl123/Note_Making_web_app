import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";
class NoteMaking extends Component {
  state = {
    date: localStorage.getItem("date")
      ? new Date(localStorage.getItem("date"))
      : "",
    note: { title: "", content: "" },
    months: [
      "January",
      "February",
      "March",
      "April",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    selectedNote: {},
    showEdit: 0,
  };
  onDateChange = (date) => {
    localStorage.setItem("date", date);
    this.setState({ date,selectedNote: {}, showEdit: 0 });
  };
  handleChange = (e) => {
    let { currentTarget: input } = e;
    const { note } = this.state;
    note[input.name] = input.value;
    this.setState({ note });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { date, note, months } = this.state;
    const { notes } = this.props;
    let d =
      date.getDate() +
      " " +
      months[date.getMonth() + 1] +
      "," +
      date.getFullYear();
    let id = notes.length + 1;
    let obj = { id: id, date: d, title: note.title, content: note.content };
    this.props.addToNotes(obj);
    let newNote = { title: "", content: "" };
    this.setState({ note: newNote });
  };
  handleChangeSel = (e) => {
    e.preventDefault();
    let { currentTarget: input } = e;
    const { selectedNote } = this.state;
    selectedNote[input.name] = input.value;
    this.setState({ selectedNote });
  };
  handleSubmitSel = (e) => {
    e.preventDefault();
    const { selectedNote } = this.state;
    this.props.updateNotes(selectedNote);
    this.setState({ selectedNote: {}, showEdit: 0 });
  };
  handleReset() {
    let note = { title: "", content: "" };
    this.setState({ note });
  }
  handleResetSel() {
    this.setState({ selectedNote: {}, showEdit: 0 });
  }
  handleEdit = (obj) => {
    let selectedNote = { ...obj };
    this.setState({ selectedNote, showEdit: 1 });
  };
  handleDelete = (obj) => {
    this.props.deleteNote(obj);
  };
  render() {
    const { notes } = this.props;
    const { note, date, months, selectedNote, showEdit } = this.state;
    console.log(date);
    let filteredNotes = [];
    if (date) {
      let d =
        date.getDate() +
        " " +
        months[date.getMonth() + 1] +
        "," +
        date.getFullYear();
      filteredNotes = notes.filter((obj) => obj.date === d);
    }
    return (
      <div className="container">
        <div className="row" style={{ backgroundColor: "dodgerblue" }}>
          <div className="col-lg-6 col-12">
            <div className="row">
              <div className="col-12 d-flex justify-content-center mb-2">
                <Calendar value={date} onChange={this.onDateChange} />
              </div>
              {date ? (
                <div className="col-12 mt-2">
                  <div className="row d-flex justify-content-center">
                    <h3>Add Note</h3>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        required={true}
                        value={note.title}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="content">Content</label>
                      <textarea
                        type="textArea"
                        className="form-control"
                        name="content"
                        required={true}
                        value={note.content}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-6">
                          <button className="btn btn-success" type="submit">
                            Save
                          </button>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                          <button
                            className="btn btn-secondary"
                            type="button"
                            onClick={() => this.handleReset()}
                          >
                            Discard
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="row d-flex justify-content-center">
              <h3>All Notes</h3>
            </div>
            <hr />
            {filteredNotes.length > 0 ? (
              <React.Fragment>
                <div className="row d-flex justify-content-center mb-2">
                  <h5>
                    {date.getDate()} {months[date.getMonth() + 1]},
                    {date.getFullYear()}
                  </h5>
                </div>
                <hr />
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">title</th>
                      <th> </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredNotes.map((obj, index) => (
                      <React.Fragment key={obj.title}>
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td onClick={() => alert(JSON.stringify(obj))}>
                            {obj.title}
                          </td>
                          <td>
                            <button
                              className="btn btn-sm btn-secondary"
                              onClick={() => this.handleEdit(obj)}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => this.handleDelete(obj)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
                {showEdit ? (
                  <div className="col-12 mt-3">
                    <div className="row d-flex justify-content-center">
                      <h3>Edit Note ({selectedNote.date})</h3>
                    </div>
                    <form onSubmit={this.handleSubmitSel}>
                      <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          required={true}
                          value={selectedNote.title}
                          onChange={this.handleChangeSel}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea
                          type="textArea"
                          className="form-control"
                          name="content"
                          required={true}
                          value={selectedNote.content}
                          onChange={this.handleChangeSel}
                        />
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-6">
                            <button className="btn btn-success" type="submit">
                              Save
                            </button>
                          </div>
                          <div className="col-6 d-flex justify-content-end">
                            <button
                              className="btn btn-secondary"
                              type="button"
                              onClick={() => this.handleResetSel()}
                            >
                              Discard
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                ) : (
                  ""
                )}
              </React.Fragment>
            ) : (
              <h6 className="d-flex justify-content-center">
                No Note Available for today.
              </h6>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    notes: state.notes,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    addToNotes: (obj) => dispatch({ type: "ADD_NOTES", obj: obj }),
    updateNotes: (obj) => dispatch({ type: "UPDATE_NOTES", obj: obj }),
    deleteNote: (obj) => dispatch({ type: "DELETE_NOTE", obj: obj }),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(NoteMaking);
