/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Navbar from './containers/Navbar';
import Sidebar from './Sidebar';
import '../assets/stylesheets/comission.scss';

const Commission = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const obj = JSON.parse(localStorage.getItem('userData'));
      setUser(obj);
    } catch (error) {
      setError(`Something went wrong: ${error}`);
    }
  }, []);

  if (error.length > 0) return <p className="text-center p-5">{error}</p>;
  return (
    <>
      <div className="p-container">
        <Navbar />
        <main>
          <div className="main__container">
            <div className="main__title">
              <img src="assets/hello.svg" alt="" />
              <div className="main__greeting">
                <h1>
                  Hello
                  {' '}
                  {user.name}
                </h1>
                <p>Welcome to Setup (Commissions Rate) Page</p>
              </div>
            </div>
            <div className="bg-white p-3">
              <h5 className="text-center my-3">SETUP</h5>
              <section id="tabs" className="project-tab">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <nav>
                        <div
                          className="nav nav-tabs nav-fill"
                          id="nav-tab"
                          role="tablist"
                        >
                          <a
                            className="nav-item nav-link active"
                            id="nav-home-tab"
                            data-toggle="tab"
                            href="#nav-home"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                          >
                            Percentage Change
                          </a>
                          <a
                            className="nav-item nav-link"
                            id="nav-profile-tab"
                            data-toggle="tab"
                            href="#nav-profile"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                          >
                            Salesman Change
                          </a>
                          <a
                            className="nav-item nav-link"
                            id="nav-contact-tab"
                            data-toggle="tab"
                            href="#nav-contact"
                            role="tab"
                            aria-controls="nav-contact"
                            aria-selected="false"
                          >
                            Details Change
                          </a>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className="tab-pane fade show active my-5"
                          id="nav-home"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                        >
                          <form>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                Seller Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Target %
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                              />
                            </div>
                            <div className="form-group form-check" />
                            <button type="submit" className="btn btn-primary">
                              Change percentage
                            </button>
                          </form>
                        </div>
                        <div
                          className="tab-pane fade my-5"
                          id="nav-profile"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                        >
                          <form>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                Salesman Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail2">Salary</label>
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail2"
                                aria-describedby="emailHelp"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Remarks
                              </label>
                              <textarea
                                id="exampleInputPassword1"
                                cols="30"
                                rows="6"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group form-check" />
                            <button type="submit" className="btn btn-primary">
                              Change Salesman
                            </button>
                          </form>
                        </div>
                        <div
                          className="tab-pane fade my-5"
                          id="nav-contact"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab"
                        >
                          <form>
                            <div className="row">
                              <div className="col">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Current Details"
                                />
                              </div>
                              <div className="col">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="New Details"
                                />
                              </div>
                            </div>
                            <div className="mt-4">
                              <button type="submit" className="btn btn-primary">
                                Change Details
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Sidebar />
      </div>
    </>
  );
};
export default Commission;
