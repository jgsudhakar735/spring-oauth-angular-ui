export declare interface BaseIFaceService<T> {

  /**
   * This method is common method to retrive all the List of data for all the modules.
   */
  retriveList(): any;

  /**
   * This is a Generic method, which ever class implements this need to write the logic to persist the data
   * @param data
   */
  save(data: T);

  /**
   * This is a Generic method, which ever class implements this need to write the logic to update the data
   * @param data
   */
  update(data: T);

  /**
   * This is a Generic method, which ever class implements this need to write the logic to delete the data
   */
  delete(primaryKey: number);

}
