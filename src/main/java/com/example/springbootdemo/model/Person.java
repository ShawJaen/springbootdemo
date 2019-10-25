package com.example.springbootdemo.model;

import java.util.Date;

import javax.validation.constraints.Pattern;

import cn.afterturn.easypoi.excel.annotation.Excel;

public class Person {
	/**
     * 正则校验
     */
    @Pattern(regexp = "[\u4E00-\u9FA5]*", message = "不是中文")
	@Excel(name = "姓名", orderNum = "0")
	private String name;
	
	@Excel(name = "性别", replace = {"男_1", "女_2"}, orderNum = "1")
    private String sex;

    @Excel(name = "生日", exportFormat = "yyyy-MM-dd", orderNum = "2")
    private Date birthday;

    public Person(String name, String sex, Date birthday) {
        this.name = name;
        this.sex = sex;
        this.birthday = birthday;
    }
    //这步很重要，少了报创建对象异常，必须要构造一个无参函数
    public Person() {

    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }
}
