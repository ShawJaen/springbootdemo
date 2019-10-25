package com.example.springbootdemo.util;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.lang.reflect.Field;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
import org.apache.poi.ss.usermodel.Workbook;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import com.example.springbootdemo.dao.UserDao;
import com.example.springbootdemo.model.ExcelImportResult;
import com.example.springbootdemo.model.Person;

import cn.afterturn.easypoi.excel.ExcelExportUtil;
import cn.afterturn.easypoi.excel.ExcelImportUtil;
import cn.afterturn.easypoi.excel.entity.ExportParams;
import cn.afterturn.easypoi.excel.entity.ImportParams;
import cn.afterturn.easypoi.excel.entity.enmus.ExcelType;

public class FileUtil {
	
	public static void exportExcel(List<?> list, String title, String sheetName, Class<?> pojoClass,String fileName,boolean isCreateHeader, HttpServletResponse response){
        ExportParams exportParams = new ExportParams(title, sheetName);
        exportParams.setCreateHeadRows(isCreateHeader);
        defaultExport(list, pojoClass, fileName, response, exportParams);

    }
    public static void exportExcel(List<?> list, String title, String sheetName, Class<?> pojoClass,String fileName, HttpServletResponse response){
        defaultExport(list, pojoClass, fileName, response, new ExportParams(title, sheetName));
    }
    public static void exportExcel(List<Map<String, Object>> list, String fileName, HttpServletResponse response){
        defaultExport(list, fileName, response);
    }

    private static void defaultExport(List<?> list, Class<?> pojoClass, String fileName, HttpServletResponse response, ExportParams exportParams) {
        Workbook workbook = ExcelExportUtil.exportExcel(exportParams,pojoClass,list);
        if (workbook != null);
        downLoadExcel(fileName, response, workbook);
    }

    private static void downLoadExcel(String fileName, HttpServletResponse response, Workbook workbook) {
        try {
            response.setCharacterEncoding("UTF-8");
            response.setHeader("content-Type", "application/vnd.ms-excel");
            response.setHeader("Content-Disposition",
                    "attachment;filename=" + URLEncoder.encode(fileName, "UTF-8"));
            workbook.write(response.getOutputStream());
        } catch (IOException e) {
    //        throw new NormalException(e.getMessage());
        }
    }
private static void defaultExport(List<Map<String, Object>> list, String fileName, HttpServletResponse response) {
        Workbook workbook = ExcelExportUtil.exportExcel(list, ExcelType.HSSF);
        if (workbook != null);
        downLoadExcel(fileName, response, workbook);
    }

// 按路径读取excel
    public static <T> List<T> importExcel(String filePath,Integer titleRows,Integer headerRows, Class<T> pojoClass){
        if (StringUtils.isBlank(filePath)){
            return null;
        }
        ImportParams params = new ImportParams();
        params.setTitleRows(titleRows);
        params.setHeadRows(headerRows);
        List<T> list = null;
        try {
            list = ExcelImportUtil.importExcel(new File(filePath), pojoClass, params);
        }catch (NoSuchElementException e){
        	System.out.println("==========模板不能为空===================");
     //       throw new NormalException("模板不能为空");
        } catch (Exception e) {
            e.printStackTrace();
     //       throw new NormalException(e.getMessage());
        }
        return list;
    }
    public static <T> List<T> importExcel(MultipartFile file, Integer titleRows, Integer headerRows, Class<T> pojoClass){
        if (file == null){
            return null;
        }
        ImportParams params = new ImportParams();
        params.setTitleRows(titleRows);
        params.setHeadRows(headerRows); 
        // need:需要  verfiy:核实,验证
        params.setNeedVerfiy(true); //需要验证
        List<T> list = null;
        try {
            list = ExcelImportUtil.importExcel(file.getInputStream(), pojoClass, params);
        }catch (NoSuchElementException e){
    //        throw new NormalException("excel文件不能为空");
        } catch (Exception e) {
    //        throw new NormalException(e.getMessage());
        }
        return list;
    }
	
    public static Map<String, Object> importExcelNew(MultipartFile file, HttpServletResponse response) throws Exception {
    	ImportParams params = new ImportParams();
    	params.setTitleRows(1);
        params.setHeadRows(1);
        // need:需要  verfiy:核实,验证
        params.setNeedVerfiy(true); //需要验证
        cn.afterturn.easypoi.excel.entity.result.ExcelImportResult<Object> result =  ExcelImportUtil.importExcelMore(file.getInputStream(), Person.class, params);
//        System.out.println("成功数据： "+result.getList());
        //通过反射获取未知对象数据
        List<Person> personlist=new ArrayList<Person>();
        for (int i = 0; i < result.getList().size(); i++) {
//        	System.out.println(result.getList().get(i).getClass().getDeclaredFields());
        	Field[] fields = result.getList().get(i).getClass().getDeclaredFields();
        	Person person = new Person();
        	Object oi = result.getList().get(i);
        	for (int j = 0; j < fields.length; j++) {
				if (!fields[j].isAccessible()) {
					fields[j].setAccessible(true);
				}
				try {
					if(fields[j].getName().equals("name")){
						person.setName(fields[j].get(oi).toString());
					}
					
//				System.out.println(fields[j].getName()+":"+fields[j].get(oi));
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
				}
			}
        	personlist.add(person);
        }
        System.out.println("====="+personlist);
       /* for (Person person : personlist) {
			System.out.println("遍历"+person.getName());
		}*/
//        System.out.println("失败数据： "+result.getFailList());
        if(result.isVerfiyFail()){
        	for (int i = 0; i < result.getFailList().size(); i++) {
//                System.out.println(ReflectionToStringBuilder.toString(result.getFailList().get(i)));
            }
        	//如果验证失败，代码到这里面来
            //失败的文件已经准备好了           
        }
        Map<String, Object> reMap = new HashMap<String, Object>();
        reMap.put("personlist", personlist);
        reMap.put("FailList", result.getFailList());
        return reMap;
	}
}
