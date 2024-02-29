"use client";
import { manufacturers } from "@/constants";
import { SearchManufactureProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

export const SearchManufacturer = ({
    setManufacturer,
  manufacture,
}: SearchManufactureProps) => {
  const [query, setQuery] = useState<string>("");
  const filteredanufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLocaleLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacture} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className={"absolute top-[14px]"}>
            <Image
              src={"/car-logo.svg"}
              width={20}
              height={20}
              alt="carLogo"
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className={"search-manufacturer__input "}
            placeholder="Vlokswegan"
            displayValue={(manufacture: string) =>manufacture
             }
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave=" transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredanufacturers.map((item) => (
                <Combobox.Option
                  value={item}
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
             {({selected,active})=>(
                <>
                 <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                </>
             )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      SearchManufacturer
    </div>
  );
};
