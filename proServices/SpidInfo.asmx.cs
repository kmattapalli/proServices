
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;

namespace SCITY
{
    /// <summary>
    /// Summary description for SpidInfo
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [ScriptService]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line.
    // [System.Web.Script.Services.ScriptService]
    public class SpidInfo : System.Web.Services.WebService
    {

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]//Specify return format.

        public string GetSpidBasic(string SpidId)
        {
            //string SpidId = "1";
            List<object> spidbasiclist = new List<object>();

            //string connect = "Server=SYS\\SQLEXPRESS;Database=SCITY;User Id=scity;Password=scity;Trusted_Connection=True";

            string strcon = ConfigurationManager.ConnectionStrings["scs"].ConnectionString;

            string query = "select p.spid as spid, p.date_created as spid_date_created," +
                            "sp.lastname as sp_lastname,sp.firstname as sp_firstname,sp.city as sp_city, sp.date_created as sp_date_joined,sp.phone as sp_phone," +
                                "sp.email as sp_email,sp.image_url as sp_pic,	cu.name as cu_name, cu.date_created as cu_date_joined,cu.country as cu_country," +
                                "cu.industry_id as cu_industry,cu.logo as cu_logo,p.client_name as c_name, '' as c_country, '' as c_industry,p.CLIENT_CONTACT_NAME as cc_name," +
                                "p.CLIENT_CONTACT_DESIGNATION as cc_designation,p.CLIENT_CONTACT_EMAIL as cc_email" +
                                " from SC_SALESPLAY p, sc_users sp, SC_CUSTOMERS cu" +
                                " where p.suid = sp.suid and sp.cust_id = cu.cust_id and p.spid = @SpidId";

            if (SpidId != null && SpidId.Length > 0)
            {


                StringBuilder sb = new StringBuilder();
                using (SqlConnection conn = new SqlConnection(strcon))
                {
                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("SpidId", SpidId);
                        conn.Open();
                        SqlDataReader rdr = cmd.ExecuteReader();
                        if (rdr.HasRows)
                        {
                            while (rdr.Read())
                            {
                                spidbasiclist.Add(new
                                {
                                    Id = rdr["spid"],
                                    Name = rdr["sp_lastname"],
                                    spid = rdr["spid"].ToString(),
                                    spid_date_created = rdr["spid_date_created"].ToString(),
                                    sp_lastname = rdr["sp_lastname"].ToString(),
                                    sp_firstname = rdr["sp_firstname"].ToString(),
                                    sp_city = rdr["sp_city"].ToString(),
                                    sp_date_joined = rdr["sp_date_joined"].ToString(),
                                    sp_phone = rdr["sp_phone"].ToString(),
                                    sp_email = rdr["sp_email"].ToString(),
                                    sp_pic = rdr["sp_pic"].ToString(),
                                    cu_name = rdr["cu_name"].ToString(),
                                    cu_date_joined = rdr["cu_date_joined"].ToString(),
                                    cu_country = rdr["cu_country"].ToString(),
                                    cu_industry = rdr["cu_industry"].ToString(),
                                    cu_logo = rdr["cu_logo"].ToString(),
                                    c_name = rdr["c_name"].ToString(),
                                    c_country = rdr["c_country"].ToString(),
                                    c_industry = rdr["c_industry"].ToString(),
                                    cc_name = rdr["cc_name"].ToString(),
                                    cc_designation = rdr["cc_designation"].ToString(),
                                    cc_email = rdr["cc_email"].ToString()
                                });
                            }
                        }
                    }
                }

            }
            return (new JavaScriptSerializer().Serialize(spidbasiclist));

        }



        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]//Specify return format.
        public string GetSpidProducts(string SpidId)
        {
            string strcon = ConfigurationManager.ConnectionStrings["scs"].ConnectionString;

            List<object> spidproductslist = new List<object>();

            string query = "select spmap_id,title,pain_point,pain_point_image,PRODUCT_NAME,PRODUCT_INFO,PRODUCT_IMAGE,spid from SC_SALESPLAY_MAPPING where spid = @SpidId";

            if (SpidId != null && SpidId.Length > 0)
            {


                StringBuilder sb = new StringBuilder();
                using (SqlConnection conn = new SqlConnection(strcon))
                {
                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("SpidId", SpidId);
                        conn.Open();
                        SqlDataReader rdr = cmd.ExecuteReader();
                        if (rdr.HasRows)
                        {
                            while (rdr.Read())
                            {
                                spidproductslist.Add(new
                                {
                                    Id = rdr["spid"],
                                    ppTitle = rdr["TITLE"],
                                    painPoint = rdr["pain_point"],
                                    pPointImage = rdr["pain_point_image"],
                                    productName = rdr["PRODUCT_NAME"],
                                    productInfo = rdr["PRODUCT_INFO"],
                                    productImage = rdr["PRODUCT_IMAGE"],
                                });
                            }
                        }
                    }
                }

            }
            return (new JavaScriptSerializer().Serialize(spidproductslist));

        }




        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]//Specify return format.
        public string GetSpidProductValues(string spMapId)
        {
            string strcon = ConfigurationManager.ConnectionStrings["scs"].ConnectionString;

            List<object> spidproductslist = new List<object>();

            string query = "select spmap_id,value_id,title,value from SC_SALESPLAY_VALUES where SPMAP_ID = @spMapId";

            if (spMapId != null && spMapId.Length > 0)
            {


                StringBuilder sb = new StringBuilder();
                using (SqlConnection conn = new SqlConnection(strcon))
                {
                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("spMapId", spMapId);
                        conn.Open();
                        SqlDataReader rdr = cmd.ExecuteReader();
                        if (rdr.HasRows)
                        {
                            while (rdr.Read())
                            {
                                spidproductslist.Add(new
                                {
                                    spMapId = rdr["spmap_id"],
                                    valueId = rdr["value_id"],
                                    valueTitle = rdr["title"],
                                    valueDesc = rdr["value"]
                                });
                            }
                        }
                    }
                }

            }
            return (new JavaScriptSerializer().Serialize(spidproductslist));

        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]//Specify return format.
        public string GetSpidProductSpecs(string spMapId)
        {
            string strcon = ConfigurationManager.ConnectionStrings["scs"].ConnectionString;

            List<object> spidproductslist = new List<object>();

            string query = "select spmap_id,spec_id,name,url from SC_SALESPLAY_SPECS where SPMAP_ID = @spMapId";

            if (spMapId != null && spMapId.Length > 0)
            {


                StringBuilder sb = new StringBuilder();
                using (SqlConnection conn = new SqlConnection(strcon))
                {
                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("spMapId", spMapId);
                        conn.Open();
                        SqlDataReader rdr = cmd.ExecuteReader();
                        if (rdr.HasRows)
                        {
                            while (rdr.Read())
                            {
                                spidproductslist.Add(new
                                {
                                    spMapId = rdr["spmap_id"],
                                    specId = rdr["spec_id"],
                                    specName = rdr["name"],
                                    specUrl = rdr["url"]
                                });
                            }
                        }
                    }
                }

            }
            return (new JavaScriptSerializer().Serialize(spidproductslist));

        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]//Specify return format.
        public string GetSpidProductManuals(string spMapId)
        {
            string strcon = ConfigurationManager.ConnectionStrings["scs"].ConnectionString;

            List<object> spidproductslist = new List<object>();

            string query = "select spmap_id,manual_id,name,url from SC_SALESPLAY_MANUALS where SPMAP_ID = @spMapId";

            if (spMapId != null && spMapId.Length > 0)
            {


                StringBuilder sb = new StringBuilder();
                using (SqlConnection conn = new SqlConnection(strcon))
                {
                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("spMapId", spMapId);
                        conn.Open();
                        SqlDataReader rdr = cmd.ExecuteReader();
                        if (rdr.HasRows)
                        {
                            while (rdr.Read())
                            {
                                spidproductslist.Add(new
                                {
                                    spMapId = rdr["spmap_id"],
                                    manualId = rdr["manual_id"],
                                    manualName = rdr["name"],
                                    manualURL = rdr["url"]
                                });
                            }
                        }
                    }
                }

            }
            return (new JavaScriptSerializer().Serialize(spidproductslist));

        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]//Specify return format.
        public string GetSpidProductBenefits(string spMapId)
        {
            string strcon = ConfigurationManager.ConnectionStrings["scs"].ConnectionString;

            List<object> spidproductslist = new List<object>();

            string query = "select spmap_id,benefit_id,title,benefit from SC_SALESPLAY_BENEFITS where SPMAP_ID = @spMapId";

            if (spMapId != null && spMapId.Length > 0)
            {


                StringBuilder sb = new StringBuilder();
                using (SqlConnection conn = new SqlConnection(strcon))
                {
                    using (SqlCommand cmd = new SqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("spMapId", spMapId);
                        conn.Open();
                        SqlDataReader rdr = cmd.ExecuteReader();
                        if (rdr.HasRows)
                        {
                            while (rdr.Read())
                            {
                                spidproductslist.Add(new
                                {
                                    spMapId = rdr["spmap_id"],
                                    benefitId = rdr["benefit_id"],
                                    benefitName = rdr["benefit"],
                                    benefitTitle = rdr["title"]
                                });
                            }
                        }
                    }
                }

            }
            return (new JavaScriptSerializer().Serialize(spidproductslist));

        }
    }
}
