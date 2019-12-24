import { UsersDB } from "../src/dataBase/userDB";
import { MetricsDB } from "../src/dataBase/metricsDB";
import { expect } from 'chai';
import 'mocha';

describe('User DB tests', () => {
    
    it('test insert user is ok', () => {
        // WHEN
        UsersDB.insert("email", "password", "firstname", "lastname", ()=>{
            // THEN
            UsersDB.exist("email", "password", (isExist) => {
                expect(isExist).to.equal(false);
                UsersDB.delete("email", "password", () => { })
            })
        })
        
    });

    it('test delete user is ok', () => {
        // GIVEN
        UsersDB.insert("email", "password", "firstname", "lastname", ()=> {
            // WHEN
            UsersDB.delete("email", "password", () => {
                // THEN
                UsersDB.exist("email", "password", (isExist) => {
                    expect(isExist).to.equal(false);

                })
            })
        })
        

    });

});

describe('Metrics DB tests', () => {

    it('test insert metrics is ok', () => {
        // WHEN
        MetricsDB.clear(()=>{
            MetricsDB.insert(0, "testId", () => {
                // THEN
                MetricsDB.get("testId", (listMetrics) => {
                    expect(listMetrics.length).to.equal(1);
                    MetricsDB.delete("testId", () => { })
                })
            })
        })
        
        
    });

    it('test delete metrics is ok', () => {
        // GIVEN
        MetricsDB.clear(()=>{
            MetricsDB.insert(0, "testId", () => {
                // WHEN
                MetricsDB.delete("testId", () => {
                    // THEN
                    MetricsDB.get("testId", (listMetrics) => {
                        expect(listMetrics.length).to.equal(0);
                    })
                })
            })
        })

    });

});

