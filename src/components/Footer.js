import React from "react";
import footerImage from "../images/footer.png";
import {Link} from "react-router-dom";

function Footer() {
    return (

        <footer className=" lg:grid lg:grid-cols-5 bg-[#C1DAAB] ">
            <div className="relative block h-64 lg:col-span-2 lg:h-full">
                <img
                    src={footerImage}
                    alt="footer image"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p>
          <span className="text-xs uppercase tracking-wide text-gray-500">
            Call us
          </span>

                            <a
                                href="tel:+9187660 15085"
                                className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
                            >
                                +91 87660 15085
                            </a>
                        </p>

                        <ul className="mt-4 space-y-1 text-sm text-gray-700 max-w-[200px]">
                            <li>Dahanu charoti road, Saravali, next to r.s.t weight bridge, Dahanu, Maharashtra 401602
                            </li>
                        </ul>

                        <ul className="mt-10 flex gap-6">
                            <li>
                                <a
                                    href="https://api.whatsapp.com/send/?phone=918766015085&text&type=phone_number&app_absent=0"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Whatsapp </span>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M19.05 4.91006C18.1332 3.98399 17.0412 3.24973 15.8376 2.75011C14.6341 2.25049 13.3431 1.99552 12.04 2.00006C6.57999 2.00006 2.12999 6.45006 2.12999 11.9101C2.12999 13.6601 2.58999 15.3601 3.44999 16.8601L2.04999 22.0001L7.29999 20.6201C8.74999 21.4101 10.38 21.8301 12.04 21.8301C17.5 21.8301 21.95 17.3801 21.95 11.9201C21.95 9.27006 20.92 6.78006 19.05 4.91006ZM12.04 20.1501C10.56 20.1501 9.10999 19.7501 7.83999 19.0001L7.53999 18.8201L4.41999 19.6401L5.24999 16.6001L5.04999 16.2901C4.22773 14.977 3.79113 13.4593 3.78999 11.9101C3.78999 7.37006 7.48999 3.67006 12.03 3.67006C14.23 3.67006 16.3 4.53006 17.85 6.09006C18.6175 6.85402 19.2257 7.76272 19.6394 8.76348C20.0531 9.76425 20.264 10.8372 20.26 11.9201C20.28 16.4601 16.58 20.1501 12.04 20.1501ZM16.56 13.9901C16.31 13.8701 15.09 13.2701 14.87 13.1801C14.64 13.1001 14.48 13.0601 14.31 13.3001C14.14 13.5501 13.67 14.1101 13.53 14.2701C13.39 14.4401 13.24 14.4601 12.99 14.3301C12.74 14.2101 11.94 13.9401 11 13.1001C10.26 12.4401 9.76999 11.6301 9.61999 11.3801C9.47999 11.1301 9.59999 11.0001 9.72999 10.8701C9.83999 10.7601 9.97999 10.5801 10.1 10.4401C10.22 10.3001 10.27 10.1901 10.35 10.0301C10.43 9.86006 10.39 9.72006 10.33 9.60006C10.27 9.48006 9.76999 8.26006 9.56999 7.76006C9.36999 7.28006 9.15999 7.34006 9.00999 7.33006H8.52999C8.35999 7.33006 8.09999 7.39006 7.86999 7.64006C7.64999 7.89006 7.00999 8.49006 7.00999 9.71006C7.00999 10.9301 7.89999 12.1101 8.01999 12.2701C8.13999 12.4401 9.76999 14.9401 12.25 16.0101C12.84 16.2701 13.3 16.4201 13.66 16.5301C14.25 16.7201 14.79 16.6901 15.22 16.6301C15.7 16.5601 16.69 16.0301 16.89 15.4501C17.1 14.8701 17.1 14.3801 17.03 14.2701C16.96 14.1601 16.81 14.1101 16.56 13.9901Z"
                                            fill="black"/>
                                    </svg>

                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.instagram.com/aatmann.dahanu/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram</span>

                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.google.com/maps/place/Aatmann+Dahanu+Farmstay/@19.984056,72.7672,17z/data=!4m6!3m5!1s0x3be7275e1e01dbfd:0xf227b11b95ee77f8!8m2!3d19.9840559!4d72.7671995!16s%2Fg%2F11rx2wxqkr?hl=en&entry=ttu"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">maps location </span>

                                    <svg className="h-5 w-5"
                                         fill="currentColor"
                                         viewBox="0 0 27 27"
                                         aria-hidden="true">
                                        <path
                                            d="M11 0C8.08369 0.00344047 5.28779 1.16347 3.22564 3.22563C1.16348 5.28778 0.00345217 8.08367 1.17029e-05 11C-0.00348119 13.3832 0.774992 15.7018 2.21601 17.6C2.21601 17.6 2.51601 17.995 2.56501 18.052L11 28L19.439 18.047C19.483 17.994 19.784 17.6 19.784 17.6L19.785 17.597C21.2253 15.6996 22.0034 13.3821 22 11C21.9966 8.08367 20.8365 5.28778 18.7744 3.22563C16.7122 1.16347 13.9163 0.00344047 11 0ZM11 15C10.2089 15 9.43553 14.7654 8.77773 14.3259C8.11993 13.8864 7.60724 13.2616 7.30449 12.5307C7.00174 11.7998 6.92253 10.9956 7.07687 10.2196C7.23121 9.44371 7.61217 8.73098 8.17158 8.17157C8.73099 7.61216 9.44373 7.2312 10.2197 7.07686C10.9956 6.92252 11.7998 7.00173 12.5307 7.30448C13.2616 7.60723 13.8864 8.11992 14.3259 8.77772C14.7654 9.43552 15 10.2089 15 11C14.9987 12.0605 14.5768 13.0771 13.827 13.827C13.0771 14.5768 12.0605 14.9987 11 15Z"
                                            fill="currentColor"/>
                                    </svg>

                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="font-medium text-gray-900">Pages</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link to="/about" className="text-gray-700 transition hover:opacity-75">
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/tribute" className="text-gray-700 transition hover:opacity-75">
                                        Tribute
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/activities" className="text-gray-700 transition hover:opacity-75">
                                        Activities
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/reviews" className="text-gray-700 transition hover:opacity-75">
                                        Reviews
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/culinary-delights" className="text-gray-700 transition hover:opacity-75">
                                        Culinary Delights
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Cottages</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="/cottages" className="text-gray-700 transition hover:opacity-75">
                                        View all
                                    </a>
                                </li>

                                <li>
                                    <Link to="/cottages/ketaki" className="text-gray-700 transition hover:opacity-75">
                                        Ketaki
                                    </Link>
                                </li>

                                <li>
                                    <Link to="cottages/hazara" className="text-gray-700 transition hover:opacity-75">
                                        Hazara
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/cottages/aparajita"
                                          className="text-gray-700 transition hover:opacity-75">
                                        Aparajita
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                            &copy; 2023. Aatmann Dahanu . All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
